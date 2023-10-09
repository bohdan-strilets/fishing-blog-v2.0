import Logo from "components/UI/Logo";
import {
  Wrapper,
  Video,
  Content,
  Container,
  Text,
  List,
  Item,
  Reference,
} from "./MainScreen.styled";

const MainScreen: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Video autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/ddd1vgg5b/video/upload/v1696848982/fisher-blog-api/mmnjrqbnflpcnyivb2c4.mp4"
          type="video/mp4"
        />
      </Video>
      <Content>
        <Container>
          <Logo type="text-icon" margin="0 0 var(--small-indent) 0" />
          <Text>
            On a sunny autumn day, as leaves gently fell from the trees and the
            lake shimmered under the warm sunrays, Jake decided to revisit his
            long-time passion - fishing. He anchored his boat at a secluded
            shore and lit a fire. The flames cast soft reflections on the calm
            water, creating a cozy atmosphere.
          </Text>
          <Text>
            With the wind in his hair and a gentle glow in his eyes, he baited
            the hook and cast his fishing line. Minutes passed slowly, and Jake
            felt his memories drifting back to childhood. Happy moments with his
            grandfather resurfaced, memories of hours spent fishing, sharing
            fishing secrets, and life lessons.
          </Text>
          <Text>
            Suddenly, the fishing rod twitched, and Jake's heart raced.
            Carefully, he reeled in his catch and smiled at the small fish in
            his hands. It was a modest catch, but the moment filled his heart
            with warmth. He released the fish back into the lake, feeling his
            soul brimming with joy and gratitude for the cherished memories.
          </Text>
          <Text>
            As the fire continued to burn, Jake sat by the water, reminiscing
            about his grandfather and thanking him for the magical moments he
            had gifted him on this autumn day.
          </Text>
          <List>
            <Item>
              <Reference to="/auth/login">Login</Reference>
            </Item>
            <Item>
              <Reference to="/auth/registration">Registration</Reference>
            </Item>
          </List>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default MainScreen;
