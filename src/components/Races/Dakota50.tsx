import { Box, Button } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PaceChart from './PaceChart';
import TimeChart from './TimeChart';
import { useState, useEffect } from 'react';
import { GraphData } from './Lutsen';
import data from './AllResults.json';
export default function Dakota50() {
	const [graphData, setGraphData] = useState<GraphData[]>([]);

	useEffect(() => {
		const filteredData = data.filter(
			(item) => item.race === 'Dakota 5-0'
		) as unknown as GraphData[];
		const ordered = filteredData.slice().sort((a, b) => a.year - b.year);
		setGraphData(ordered);
	}, []);
	return (
		<>
			<h1>Dakota 5-0</h1>
			<Box>
				<Button
					target='_blank'
					href='httBoxs://www.athlinks.com/event/374003/results/Event/1035580/Course/2306073/Bib/87'
				>
					2022 Results
				</Button>
				<Button
					startIcon={<EmojiEventsOutlinedIcon />}
					target='_blank'
					href='https://dakotafiveo.itsyourrace.com/Results/6253/2023/123638/105'
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
