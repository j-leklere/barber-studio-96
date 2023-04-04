const navLinkFn = ({ isActive, isPending }) =>
  isPending ? 'nav-link--pending' : isActive ? 'nav-link--active' : 'nav-link'

export default navLinkFn
