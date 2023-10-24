import { Box, Button } from '@mui/material';
import Header from './Header';
import Lutsen from './Races/Lutsen';
import Dakota50 from './Races/Dakota50';
import Epic from './Races/Epic';

export default function Races() {
	return (
		<>
			<Header />
			<div>
				<h1>Races</h1>
				<p>
					<Button
						target='_blank'
						href='https://www.athlinks.com/athletes/500199308'
					>
						Athlinks Results
					</Button>
				</p>
			</div>
			<Box>
				<Lutsen />
				<Dakota50 />
				<Epic />
			</Box>
		</>
	);
}
