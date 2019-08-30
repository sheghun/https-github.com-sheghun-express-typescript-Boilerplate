import {cp} from 'shelljs';

cp('-R', 'src/public', 'dist/public');
cp('.env', 'dist/.env');
cp('-R', 'src/templates', 'dist/');
cp('-R', 'src/_data', 'dist/');
