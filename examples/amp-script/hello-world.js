/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const root = document.createElement('div');
root.className = "root";
document.body.appendChild(root);

function createButton(label, onClick) {
  const btn = document.createElement('button');
  const text = document.createTextNode(label);
  btn.appendChild(text);
  btn.addEventListener('click', onClick);
  root.appendChild(btn);
}

createButton('Insert Hello World!', () => {
  const el = document.createElement('h1');
  el.textContent = 'Hello World!';
  document.body.appendChild(el);
});

// <amp-img> should be allowed.
createButton('Insert amp-img', () => {
  const el = document.createElement('amp-img');
  el.setAttribute('width', '300');
  el.setAttribute('height', '200');
  el.setAttribute('src', '/examples/img/hero@1x.jpg')
  document.body.appendChild(el);
});

// <script> should be sanitized.
createButton('Insert <script>', () => {
  const el = document.createElement('script');
  document.body.appendChild(el);
});

// <img> should be sanitized.
createButton('Insert <img>', () => {
  const el = document.createElement('img');
  document.body.appendChild(el);
});
