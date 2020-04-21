
export const Config={
    serverport: process.env.PORT || 3000,
    secret: "some-secret-goes-here",
    tokenLife: 1800,
    url: process.env.MONGOURL || "mongodb://localhost:27017/"    
};