import { Alert, Button, Space } from '@mantine/core';
import { HiOutlineExclamation } from 'react-icons/hi';

const GITHUB_PROJECT = 'https://github.com/users/Nxt3/projects/1/views/1';

export function WorkInProgressAlert() {
  return (
    <Alert variant="light" color="yellow" title="" icon={<HiOutlineExclamation />}>
      This is a work in progress. Some features may not work as expected.
      <Space></Space>
      <Button component="a" href={GITHUB_PROJECT} target="_blank" variant="light" size="compact-xs">
        See the GitHub project for more info
      </Button>
    </Alert>
  );
}
