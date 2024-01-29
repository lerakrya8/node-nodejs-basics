const parseArgs = () => {
    const commandLineArgs = process.argv.slice(2).map(arg => arg.replace('--', ''))
    .reduce((acc, arg, idx) => {
        if ((idx & 1) === 0) acc.push([]);
        acc[acc.length - 1].push(arg);
        return acc;
      }, [])

    console.log(commandLineArgs.map(([name, value]) => `${name} is ${value}`).join(', '));
};

parseArgs();