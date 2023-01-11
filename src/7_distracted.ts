import { endAdventure, haveAdventures } from '..';
import { askQuestion, clear, print } from '../console';

const goOuts = ['Run', 'Walk', 'Bycicle'] as const; ;


type goOut = typeof goOuts[number];

export function selectDistracted() {
	clear(false);
	print('------------------------');
	print(`🏃 Now it's time go out! 🏃`);
	print('------------------------');
	print(' 🏙️  You can the options of how to tour the city: 🏙️');
	goOuts.forEach((h, i) => print(` ${i} - ${h}`));
	askQuestion('You must choose how to tour the city?', haveGoOut);
}

export function haveGoOut(goOut: string): void {
	clear(true);

	const number = parseInt(goOut);

	if (isNaN(number)) {   // --> valid to enter a number
		print(`😮`);
		print(`That's not a valid choice 😭`);
		return endAdventure();
	}

	if (number < 0 || number > goOuts.length - 1) {  // --> valid that a number is entered according to the alternatives
		print(`😮`);
		print(`${number} is an invalid number 😭`);
		return endAdventure();
	}


	switch ( goOuts[number] ) {
		case 'Run':
			print(' 🥳🥳 CONGRATULATIONS! 🥳🥳 \n  🏃🏃 You can visit the city running with a local guide. live a different experience doing sports  🏃🏃 ');
			return askQuestion('Press ENTER to re-enter Wonderland! ',haveAdventures);
			break;
		case 'Walk':
			print(' 🥳🥳 CONGRATULATIONS! 🥳🥳 \n  🚶🚶 Walking does not require a complex technique, you can explore the city at your own pace and adjust the route \n according to what you like best!! 🚶🚶');
			return askQuestion('Press ENTER to re-enter Wonderland! ',haveAdventures);
			break;
		case 'Bycicle':
			print('🥳🥳 CONGRATULATIONS! 🥳🥳 \n 🚴🚴  By bike you can travel from one end of the city to another in a short time, going both on bike lanes, \n on the road or even on the sidewalk  🚴🚴 ');
			return askQuestion('Press ENTER to re-enter Wonderland!',haveAdventures);
			break;

	 }

}

