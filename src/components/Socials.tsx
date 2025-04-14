import GitHubIcon from '@/app/assets/icons/github.svg?react';
import LinkedInIcon from '@/app/assets/icons/linkedin.svg?react';
const Socials = () => {
  return (
    <div className='flex gap-2'>
      <GitHubIcon className='icon'/>
      <LinkedInIcon className='icon'/>
    </div>
  );
};

export default Socials;
