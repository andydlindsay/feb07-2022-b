const Header = (props) => {
  console.log('props', props);
  // const heading = 'welcome to the site';

  return (
    <>
      <h2>{props.heading}</h2>
    </>
  );
};

export default Header;