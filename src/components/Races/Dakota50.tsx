import { Button } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
export default function Dakota50() {
	return (
		<>
			<h1>Dakota 5-0</h1>
			<p>
				<Button
					target='_blank'
					href=''
				>
					2021 Results
				</Button>
				<Button
					target='_blank'
					href='https://www.athlinks.com/event/374003/results/Event/1035580/Course/2306073/Bib/87'
				>
					2022 Results
				</Button>
				<Button
					startIcon={<EmojiEventsOutlinedIcon />}
					target='_blank'
					href=''
				>
					2023 Results
				</Button>
			</p>
		</>
	);
}
