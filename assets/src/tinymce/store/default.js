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
 * External dependencies
 */
import forEach from 'lodash/forEach';
import isEmpty from 'lodash/isEmpty';

const { orderlist, views } = window.webStoriesMCEData;

let DEFAULT_STATE = {
  settings: {},
  modalOpen: false,
  editor: false,
  currentView: 'grid',
};

forEach(views, (value) => {
  const { value: viewValue } = value;

  const { title, author, date } = window.webStoriesMCEData.fields[viewValue];

  DEFAULT_STATE['settings'][viewValue] = {
    title: title,
    author: author,
    date: date,
    image_align: false,
    number: 5,
    columns: 1,
    view: viewValue,
    order: isEmpty(orderlist) ? 'latest' : orderlist[0].value,
  };
});

export default DEFAULT_STATE;
