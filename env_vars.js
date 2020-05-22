const ENV = "prod";
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") ENV = "local";

const API_BASE_URL = ENV === "prod" ? "https://nameless-gorge-05765.herokuapp.com/" : "http://localhost:5000/";