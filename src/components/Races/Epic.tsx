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

export default function Epic() {
	const [graphData, setGraphData] = useState<GraphData[]>([]);

	useEffect(() => {
		const filteredData = data.filter(
			(item) => item.race === 'Epic Bike Fest MTB'
		) as unknown as GraphData[];
		const ordered = filteredData.slice().sort((a, b) => a.year - b.year);
		setGraphData(ordered);
	}, []);
	return (
		<>
			<h1>Epic Bike Fest / </h1>
			<Box>
				<Button
					target='_blank'
					href='https://my.raceresult.com/171629/#2_50D290'
				>
					2021 Results - Half Epic
				</Button>
				<Button
					target='_blank'
					href='https://my.raceresult.com/204502/results'
				>
					2022 Results - Full Epic - Full Gravel
				</Button>
				<Button
					startIcon={<BoltIcon />}
					target='_blank'
					href='https://pttiming.com/road/2023/epicbikefest/results.html'
				>
					2023 Results - Full Epic - Full Gravel
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
