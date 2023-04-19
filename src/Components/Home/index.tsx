import {
	CircularProgress,
	Container,
	Grid,
	Stack,
	styled,
} from "@mui/material";
import useApi from "../../Hooks/useApi";
import { GetPostsService } from "../../Services/PostService";
import { useEffect } from "react";
import List from "../List";
import { GetUsersService } from "../../Services/UserService";
import SelectedList from "../SelectedList";
import { useAppDispatch } from "../../Hooks/redux";
import { add, remove } from "../../Redux/selectedSlice";

const Wrapper = styled(Grid)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	justifyContent: "center",
	alignItems: "center",
	padding: theme.spacing(5),
}));

const LoadingWrapper = styled(Stack)(() => ({
	width: "100vw",
	height: "100vh",
	justifyContent: "center",
	alignItems: "center",
}));

function Home() {
	// Redux
	const dispatch = useAppDispatch();

	// Api
	const getPostsApi = useApi(GetPostsService);
	const getUsersApi = useApi(GetUsersService);

	// Functions
	const addToSelectedList = (item: string) => {
		dispatch(add(item));
	};
	const removeFromSelectedList = (index: number) => {
		dispatch(remove(index));
	};

	useEffect(() => {
		getPostsApi.request();
		getUsersApi.request();
	}, []);

	if (!getPostsApi.data || !getUsersApi.data)
		return (
			<LoadingWrapper>
				<CircularProgress />
			</LoadingWrapper>
		);

	return (
		<Container maxWidth="xl">
			<Wrapper container spacing={4}>
				<List data={getUsersApi.data.data} onClick={addToSelectedList} />

				<List data={getPostsApi.data.data} onClick={addToSelectedList} />

				<SelectedList onClick={removeFromSelectedList} />
			</Wrapper>
		</Container>
	);
}

export default Home;
