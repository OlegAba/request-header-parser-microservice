# Request Header Parser Microservice
[Live Server Example](https://request-header-parser-microservice.fly.dev)

## Installation
We use [NPM](https://www.npmjs.com/get-npm) for our dependency manager. This should be installed before continuing.

To access the project, run the following:
```
git clone --recursive https://github.com/OlegAba/request-header-parser-microservice.git
cd request-header-parser-microservice
npm run install-all
npm run dev
```

## Docker
Build and run the container locally
```
docker build . -t request-header-parser-microservice
docker run -dp 8080:8080 request-header-parser-microservice
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/OlegAba/request-header-parser-microservice/blob/main/LICENSE) file for details.