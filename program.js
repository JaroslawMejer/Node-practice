process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input !== null){
		var instruction = input.toString().trim()
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!');
				process.exit();
			case '/version':
				console.log(process.env);
				break;
			case '/lang':
				console.log(process.env.lang);
				break;
			default:
				process.stderr.write('Wrong instruction!');
				break;
		}
	}
})