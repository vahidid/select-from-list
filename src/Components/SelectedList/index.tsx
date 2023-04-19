import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useAppSelector } from "../../Hooks/redux";
import { selectSelectedList } from "../../Redux/selectedSlice";

interface IProps {
	onClick: (index: number) => void;
}

function SelectedList(props: IProps) {
	const { onClick } = props;
	// Redux
	const selectedList = useAppSelector(selectSelectedList);

	return (
		<Grid item xs={12} sm={6} md={4} height="100%">
			<Card
				sx={{
					overflow: "auto",
					height: "100%",
				}}
			>
				<Box p={3}>
					<Typography variant="subtitle1">Tap to delete</Typography>
					<CardContent>
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
									label={item}
									onClick={() => {
										onClick(index);
									}}
								/>
							))}
						</Stack>
					</CardContent>
				</Box>
			</Card>
		</Grid>
	);
}

export default SelectedList;
