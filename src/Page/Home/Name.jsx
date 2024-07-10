 
import Typewriter from 'typewriter-effect';

const Name = () => {
    return <Typewriter
    options={{
      strings: ['Rajiul Islam', 'Jr. Front-end Developer ', 'Quick Learner'],
      autoStart: true,
      loop: true,
    }}
  />
};

export default Name;