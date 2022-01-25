import { Card, CardTitle, CardBody, CardSubtitle, CardText } from "reactstrap";

const About = () => {
  return (
    <div>
      <Card className="text-center" body color="light">
        <CardBody>
          <CardTitle tag="h5">What is Vegan Recipe Finder?</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            An easy solution to stop wasting groceries.
          </CardSubtitle>
          <CardText>
            As a vegan who has a terrible tendency of purchasing groceries only
            to let them rot in the refrigerator, I realized I had a need for an
            app that will help me to come up with recipes for my expiring
            groceries. This is where Vegan Recipe Finder comes in to play!
            Simple type in the ingredient(s) you have sitting around in your
            kitchen, and the app will search through recipe data and present you
            options to make with what you have on hand. It's as easy as that!
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
