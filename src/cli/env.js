const parseEnv = () => {
   const variables = process.env;
   const result = [];
   for (const key in variables) {
    if (key.startsWith('RSS_')) {
        result.push(`${key}=${variables[key]}`)
    }
   }
   console.log(result.join('; '));
};

parseEnv();