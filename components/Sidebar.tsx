import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
  Divider,
} from "@chakra-ui/layout";
import { musicMenu, navMenu, playList } from "mocks/data";
import NextLink from "next/link";
import NextImage from "next/image";
import usePlayList from "hooks/usePlaylist";

const Sidebar = () => {
  const { playlists } = usePlayList();

  return (
    <Box width="100%" height="100%" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" height="100%">
        <Box
          width="120px"
          height="60px"
          marginBottom="20px"
          paddingX="20px"
          position="relative"
        >
          <NextImage src="/img/logo.svg" layout="fill" />
        </Box>
        <Box marginBottom="20px">
          <List spacing={3}>
            {navMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="14px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route}>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                        width="20px"
                        height="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginTop="20px">
          <List spacing={3}>
            {musicMenu.map((item) => (
              <ListItem key={item.name} paddingX="20px" fontSize="14px">
                <LinkBox>
                  <NextLink href={item.route}>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                        width="20px"
                        height="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.700" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={3}>
            {playlists.map((item) => (
              <ListItem paddingX="20px" key={item.id}>
                <LinkBox>
                  <NextLink href="/">
                    <LinkOverlay>{item.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
