import { Box, Button } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

import data from './AllResults.json';
import { useEffect, useState } from 'react';
import PaceChart from './PaceChart';
import TimeChart from './TimeChart';

export type GraphData = {
	year: number;
	miles: number;
	pace: number;
	time: number;
	race: string;
};

export default function Lutsen() {
	const [graphData, setGraphData] = useState<GraphData[]>([]);

	useEffect(() => {
		const filteredData = data.filter(
			(item) => item.race === 'Lutsen 99er'
		) as unknown as GraphData[];
		const ordered = filteredData.slice().sort((a, b) => a.year - b.year);
		setGraphData(ordered);
	}, []);
	return (
		<>
			<h1>Lutsen 99er</h1>
			<Box>
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
					2023 Results
				</Button>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					height: '500px',
				}}
			>
				<Box sx={{ marginRight: '20px' }}>
					<PaceChart graphData={graphData} />
				</Box>
				<Box>
					<TimeChart graphData={graphData} />
				</Box>
			</Box>
		</>
	);
}
