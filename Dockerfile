FROM centos:centos7

# change default shell
SHELL ["/bin/bash", "-c"]

ENV HOME /root
ENV ANYENV_HOME $HOME/.anyenv
ENV ANYENV_ENV  $ANYENV_HOME/envs

# install packages
RUN set -x \
  && yum -y update \
  && yum install -y epel-release \
  && yum install -y git make autoconf curl wget \
  && yum install -y gcc-c++ glibc-headers openssl-devel readline libyaml-devel readline-devel zlib zlib-devel sqlite-devel bzip2

# install anyenv
RUN git clone https://github.com/riywo/anyenv ~/.anyenv \
    && echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bashrc \
    && echo 'eval "$(anyenv init -)"' >> ~/.bashrc
ENV PATH $ANYENV_HOME/bin:$PATH

# install envs
RUN source ~/.bashrc \
  && anyenv install rbenv \
  && anyenv install ndenv
ENV RBENV_ROOT $ANYENV_ENV/rbenv
ENV NDENV_ROOT $ANYENV_ENV/ndenv
ENV PATH $RBENV_ROOT/bin:$RBENV_ROOT/shims:$NDENV_ROOT/bin:$NDENV_ROOT/shims:$PATH

# install ruby
RUN source ~/.bashrc \
  && rbenv install 2.5.1 \
  && rbenv global 2.5.1 \
  && gem install bundler -v 1.16.5

# install node
RUN source ~/.bashrc \
  && ndenv install v8.12.0 \
  && ndenv global v8.12.0 \
  && npm install npm@6.4.1 -g \
  && npm install yarn@1.10.1 -g

# install anyenv update
RUN source ~/.bashrc \
  && mkdir -p $(anyenv root)/plugins \
  && git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update

# change default work directory
WORKDIR /usr/local/src

# rails:3000
EXPOSE 3000
