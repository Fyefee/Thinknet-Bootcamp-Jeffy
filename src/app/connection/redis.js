const Redis = require("ioredis");
const apicache = require("apicache-plus");

const cacheWithRedis = apicache.options({
  redisClient: new Redis("redis://:sLMYl3CeIJ36ZaxKOjK508gcqizPu7Ir@redis-19921.c295.ap-southeast-1-1.ec2.cloud.redislabs.com:19921"),
});

export {
  cacheWithRedis,
};
