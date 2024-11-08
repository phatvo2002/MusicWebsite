import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useLocation, Link as RouterLink } from 'react-router-dom';
const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter((segment) => segment);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {pathSegments.map((segment, index) => {
        // Build the path up to the current segment
        const pathToSegment = `/${pathSegments.slice(0, index + 1).join('/')}`;

        // Capitalize the segment name for display
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        // Render last segment as Typography (current page), others as Link
        return index === pathSegments.length - 1 ? (
          <Typography
            key={pathToSegment}
            variant="body1"
            sx={{ color: 'text.primary', fontWeight: 600 }}
          >
            {label}
          </Typography>
        ) : (
          <Link
            key={pathToSegment}
            component={RouterLink}
            to={pathToSegment}
            variant="body1"
            color="inherit"
            underline="hover"
          >
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
