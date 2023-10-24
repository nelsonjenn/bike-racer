import { Bar, ComposedChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { GraphData } from './Lutsen';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';

type paceChartProps = {
	graphData: GraphData[];
};
export default function PaceChart({ graphData }: paceChartProps) {
	const [data, setData] = useState<GraphData[]>([]);

	useEffect(() => {
		setData(graphData);
	}, [graphData]);

	return (
		<Card>
			<ComposedChart
				width={400}
				height={400}
				data={graphData}
				margin={{
					top: 15,
					right: 30,
					left: 20,
					bottom: 50,
				}}
			>
				<XAxis dataKey='Year' />
				<YAxis domain={[7, 16]} />

				<Tooltip />
				<Bar
					dataKey='Pace'
					label={{ position: 'top' }}
					barSize={10}
					fill='#413ea0'
				/>
				<Legend />
			</ComposedChart>{' '}
		</Card>
	);
}
