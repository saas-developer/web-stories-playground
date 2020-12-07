/*
 * Copyright 2020 Google LLC
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
 * Internal dependencies
 */
/**
 * WordPress dependencies
 */
import { createReduxStore, register } from '@wordpress/data';
import * as actions from './actions';
import name from './name';
import reducer from './reducers';
import * as selectors from './selectors';

/**
 * Create a store.
 */
const WebStoryMCEStore = createReduxStore(name,{
  actions: actions,
  reducer: reducer,
  selectors: selectors,
});

register(WebStoryMCEStore);

export default WebStoryMCEStore;
