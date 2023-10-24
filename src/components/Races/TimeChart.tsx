import { ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { GraphData } from './Lutsen';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';

type timeChartProps = {
	graphData: GraphData[];
};
export default function TimeChart({ graphData }: timeChartProps) {
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
					top: 5,
					right: 30,
					left: 20,
					bottom: 50,
				}}
			>
				<XAxis dataKey='Year' />

				<YAxis domain={[300, 550]} />

				<Tooltip />

				<Legend />
				<Line
					type='monotone'
					dataKey='time'
					stroke='#ff7300'
					label={{ position: 'top' }}
				/>
			</ComposedChart>{' '}
		</Card>
	);
}
