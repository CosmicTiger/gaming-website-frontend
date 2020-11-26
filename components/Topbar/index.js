import React from 'react';
import { 
  Container, 
  Grid, 
  Image, 
  Input } from 'semantic-ui-react';
import Link from 'next/link';

const Logo = () => {
    return(
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Gaming Brand"/>
        </a>
      </Link>
    );
}

const Search = () => {
  return (
    <Input 
      id="search-game"
      icon={{ name: "search" }}
    />
  );
}

const TopBar = () => {
  return (
    <div className="Topbar">
        <Container>
          <Grid className="Topbar-body">
            <Grid.Column width={8} className="Topbar-body-left">
              <Logo/>
            </Grid.Column>
            <Grid.Column width={8} className="Topbar-body-right">
              <Search/>
            </Grid.Column>
          </Grid>
        </Container>
    </div>
  );
}

export default TopBar;
