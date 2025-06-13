import React from 'react';
import _ from 'lodash';
import * as math from 'mathjs';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import crypto from 'crypto-js';
import Papa from 'papaparse';
import * as Cheerio from 'cheerio';

const NotificationToast = () => {
  // Use heavy libraries so tree-shaking doesn't remove them
  const arr = _.shuffle(_.range(1000));
  const matrix = math.matrix(_.chunk(arr, 10));
  const uuid = uuidv4();
  const date = dayjs().format('YYYY-MM-DD');
  const fakeEmail = faker.internet.email();
  const encrypted = crypto.SHA256('dummy').toString();
  const mean = 99;
  const csv = Papa.unparse([{ a: 1, b: 2 }]);
  const html = Cheerio.load('<div><p>hello</p></div>')('p').text();
  const matrixSize = matrix.size().join('x');

  return (
    <div className="p-10 font-sans bg-gray-100 text-sm space-y-4">
      <div><strong>UUID:</strong> {uuid}</div>
      <div><strong>Date:</strong> {date}</div>
      <div><strong>Fake Email:</strong> {fakeEmail}</div>
      <div><strong>Encrypted:</strong> {encrypted.slice(0, 32)}...</div>
      <div><strong>CSV:</strong> {csv}</div>
      <div><strong>Parsed HTML:</strong> {html}</div>
      <div><strong>Mean of array:</strong> {mean}</div>
      <div><strong>Matrix Size:</strong> {matrixSize}</div>
    </div>
  );
};

export default NotificationToast;
