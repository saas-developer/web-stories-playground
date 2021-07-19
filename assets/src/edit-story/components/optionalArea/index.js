/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import styled from 'styled-components';
import { isPlayground } from '@web-stories-wp/playground';

/**
 * Internal dependencies
 */
import PropTypes from 'prop-types';
import Tooltip from '../tooltip';

const DisabledArea = styled.div`
  opacity: 0.5;
`;

// @todo Needs to be refactored.
function OptionalArea({ children, playgroundTooltipTitle }) {
  if (!isPlayground()) {
    return children;
  }

  return (
    <Tooltip title={playgroundTooltipTitle}>
      <DisabledArea>{children}</DisabledArea>
    </Tooltip>
  );
}

OptionalArea.propTypes = {
  playgroundTooltipTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default OptionalArea;