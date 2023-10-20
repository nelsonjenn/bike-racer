import { Box } from '@mui/material';
import Header from './Header';

export default function Contact() {
	const qrCode = require('../images/qr-code.png');
	return (
		<>
			<Header />
			<Box>
				<h1>Griffin Nelson</h1>
				<img
					src={qrCode}
					width='300'
				/>
			</Box>
		</>
	);
}
