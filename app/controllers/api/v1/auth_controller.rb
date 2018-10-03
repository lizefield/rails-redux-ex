module Api
  module V1
    class AuthController < ApplicationController

      def login
        if (params[:id].present? || params[:password].present?) && (params[:id] == 'test' && params[:password] == 'pass')
          render json: { status: 'success', code: 200 }
        else
          render json: { status: 'error', code: 401, message: 'invalid id or password'}
        end
      end

    end
  end
end
