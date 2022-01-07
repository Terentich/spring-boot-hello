FROM openjdk:11-jre-slim-buster
VOLUME /tmp
COPY backend/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]