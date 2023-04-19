import {
	Box,
	Button,
	Card,
	Chip,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { empty, selectSelectedList } from "../../Redux/selectedSlice";

interface IProps {
	onClick: (index: number) => void;
}

function SelectedList(props: IProps) {
	const { onClick } = props;
	// Redux
	const selectedList = useAppSelector(selectSelectedList);
	const dispatch = useAppDispatch();

	const emptyList = () => {
		dispatch(empty());
	};

	return (
		<Grid item xs={12} sm={6} md={4} height="100%">
			<Card
				sx={{
					// overflow: "auto",
					height: "100%",
					position: "relative",
				}}
			>
				<Box p={3} sx={{ overflow: "auto", height: "85%" }}>
					<Typography variant="subtitle1">Tap to delete</Typography>

					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="flex-start"
						width="100%"
						flexWrap="wrap"
						gap={1}
					>
						{selectedList.map((item, index) => (
							<Chip
								color="primary"
								key={index}
								label={item}
								onClick={() => {
									onClick(index);
								}}
							/>
						))}
					</Stack>
				</Box>
				<Button
					fullWidth
					variant="contained"
					color="secondary"
					sx={{ position: "absolute", bottom: 0 }}
					onClick={emptyList}
				>
					Clear list
				</Button>
			</Card>
		</Grid>
	);
}

export default SelectedList;
