# www

## Docker 

docker build -t 172.42.42.2:5000/www .
- docker images

docker run -d -p 8080:8080 172.42.42.2:5000/www
- docker ps
- curl localhost:8080
: Hello, www site!

docker push 172.42.42.2:5000/www

## Helm

helm install www --name www

## Jenkins

## Kubernetes

