FROM mongo

ARG MONGO_USERNAME
ARG MONGO_PASSWORD

ENV MONGO_USERNAME ${MONGO_USERNAME}
ENV MONGO_PASSWORD ${MONGO_PASSWORD}

COPY products.json /products.json

CMD mongoimport --host mongodb:27017 --authenticationDatabase admin -u $MONGO_USERNAME -p $MONGO_PASSWORD --db ecommerce --type json --file ./products.json --jsonArray