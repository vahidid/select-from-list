import {
	Avatar,
	Card,
	CardContent,
	Grid,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	List as MuiList,
	styled,
} from "@mui/material";
import { Post } from "../../Models/Post";
import { User } from "../../Models/User";
import { AccountCircleRounded } from "@mui/icons-material";

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

	return (
		<Grid item xs={12} sm={6} md={4} height="100%">
			<Card sx={{ height: "100%" }}>
				<Wrapper>
					<MuiList>
						{data.map((item) => (
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
