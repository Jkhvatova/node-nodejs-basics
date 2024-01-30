const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = [];
    args.forEach((arg, i) => {
        if (arg.startsWith('--')) {
            result.push(`${args[i].slice(2)} is ${args[i+1]}`);
        }
    })
    console.log(result.join(', '));
};

parseArgs();


