const parseEnv = () => {
    const environmentVars = Object.entries(process.env);

    environmentVars.forEach(([varName, varValue]) => console.log(`RSS_${varName}=${varValue}`))
};

parseEnv();