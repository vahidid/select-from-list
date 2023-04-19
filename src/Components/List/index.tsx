import {
	Avatar,
	Box,
	Card,
	CardContent,
	Grid,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	List as MuiList,
	TextField,
	styled,
} from "@mui/material";
import { Post } from "../../Models/Post";
import { User } from "../../Models/User";
import { AccountCircleRounded } from "@mui/icons-material";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";

interface IProps {
	data: Array<Post | User>;
	onClick: (item: string) => void;
}

const Wrapper = styled(CardContent)(() => ({
	maxHeight: "100%",
	overflowY: "auto",
}));

function List(props: IProps) {
	const { data, onClick } = props;

	// State
	const [search, setSearch] = useState("");

	const filteredData = useMemo(() => {
		if (Boolean(search)) {
			const options = {
				includeScore: true,
				threshold: 0.8,
				keys: ["title", "name", "email", "body"],
			};
			const fuse = new Fuse(data, options);

			return fuse.search(search).map((i) => i.item);
		} else {
			return data;
		}
	}, [search]);

	return (
		<Grid item xs={12} sm={6} md={4} height="100%">
			<Card sx={{ height: "100%" }}>
				<Box p={3}>
					<TextField
						fullWidth
						label="Search..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</Box>
				<Wrapper>
					<MuiList>
						{filteredData.map((item) => (
							<ListItem key={item.id}>
								<ListItemButton
									onClick={() => {
										if ("title" in item) {
											onClick(item.title);
										} else {
											onClick(item.name);
										}
									}}
								>
									<ListItemAvatar>
										<Avatar>
											<AccountCircleRounded />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary={"title" in item ? item.title : item.name}
										secondary={"title" in item ? item.body : item.email}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</MuiList>
				</Wrapper>
			</Card>
		</Grid>
	);
}

export default List;
