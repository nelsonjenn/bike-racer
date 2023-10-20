import { Button } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

export default function Lutsen() {
	return (
		<>
			<h1>Lutsen 99er</h1>
			<p>
				<Button
					target='_blank'
					href='https://www.athlinks.com/event/32708/results/Event/970604/Course/2062268/Bib/1679'
				>
					2021 Results
				</Button>
				<Button
					target='_blank'
					href='https://www.athlinks.com/event/32708/results/Event/1021696/Course/2260076/Bib/2068'
				>
					2022 Results
				</Button>
				<Button
					startIcon={<BoltIcon />}
					target='_blank'
					href='https://www.athlinks.com/event/32708/results/Event/1038965/Course/2318238/Bib/1948'
				>
					2024 Results
				</Button>
			</p>
		</>
	);
}
