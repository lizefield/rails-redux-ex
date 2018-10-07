module Api
  module V1
    class AuthController < ApplicationController
      include ActionController::HttpAuthentication::Token::ControllerMethods
      include TokenManager

      USER_EMAIL = 'test@test.com'
      USER_PASSWORD = 'password'

      def status
        # check header is `request.headers[:HTTP_AUTHORIZATION]`
        authenticate_or_request_with_http_token do |token, options|
          # decode
          decoded = jwt_decode(token)
          logger.debug $login_user_ids.inspect
          # check logined
          $login_user_ids.include?(decoded['aud'].split('.').last)
        end
      end

      def login
        # check email & password
        if (params[:email].present? || params[:password].present?) && (params[:email] == USER_EMAIL && params[:password] == USER_PASSWORD)
          # generate uuid
          uuid = SecureRandom.uuid
          # generate jwt token
          token = jwt_encode({ id: uuid, email: USER_EMAIL, password: USER_PASSWORD })
          # save logined id
          $login_user_ids.push(uuid) unless $login_user_ids.include?(uuid)
          logger.debug $login_user_ids.inspect

          render json: { status: 'success', code: 200, token: token }
        else
          render json: { status: 'error', code: 401, message: 'invalid email or password'}
        end
      end

      def logout
        # check authorized token
        authenticate_or_request_with_http_token do |token, options|
          logger.debug token
          # decode
          decoded = jwt_decode(token)
          logger.debug $login_user_ids.inspect
          # delete
          $login_user_ids.delete(decoded['aud'].split('.').last)
        end
      end

    end
  end
end
