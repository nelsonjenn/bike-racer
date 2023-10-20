import { Outlet, Link, Route } from 'react-router-dom';
import Bio from './Bio';
import Contact from './Contact';
import Races from './Races';
import { Box, Button } from '@mui/material';

export default function Header() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					background: 'darkgray',
					width: '100vw',
					height: '100px',
				}}
			></Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'center',
					justifyContent: 'space-evenly',
				}}
			>
				<Button
					component={Link}
					to={'/'}
				>
					Home
				</Button>
				<Button
					component={Link}
					to={'/contact'}
				>
					Contact Info
				</Button>
				<Button
					component={Link}
					to={'/races'}
				>
					Races
				</Button>
			</Box>
		</>
	);
}
