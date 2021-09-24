FROM centos
LABEL maintainer "Myname <xxxx@gmail.com>"
# RUN: buildするときに実行されるもの
# RUN echo "now building..."
# CMD: runするときに実行されるもの
# CMD ["echo", "now running..."]
RUN yum install -y httpd
ADD ./index.html /var/www/html
EXPOSE 80
CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND"]