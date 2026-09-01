import { writeFileSync } from 'fs';

const base = [
  { name: 'Ruth P.', location: 'Ohio', category: 'Seniors', amount: '$475,000' },
  { name: 'Dominic H.', location: 'Georgia', category: 'Business', amount: '$640,000' },
  { name: 'Marisol V.', location: 'Nevada', category: 'Housing', amount: '$950,000' },
  { name: 'Keisha G.', location: 'Maryland', category: 'Teachers', amount: '$125,000' },
  { name: 'Arthur N.', location: 'Oregon', category: 'Retired teachers', amount: '$310,000' },
  { name: 'Priya S.', location: 'Illinois', category: 'Education', amount: '$385,000' },
  { name: 'Calvin R.', location: 'Tennessee', category: 'Medical', amount: '$720,000' },
  { name: 'Elena B.', location: 'Arizona', category: 'Seniors', amount: '$210,000' },
  { name: 'Jonah M.', location: 'Pennsylvania', category: 'Medical', amount: '$520,000' },
  { name: 'Nadia C.', location: 'Michigan', category: 'Business', amount: '$425,000' },
  { name: 'Harold W.', location: 'North Carolina', category: 'Retired teachers', amount: '$185,000' },
  { name: 'Aisha B.', location: 'Texas', category: 'Education', amount: '$275,000' },
  { name: 'Linda K.', location: 'Wisconsin', category: 'Housing', amount: '$810,000' },
  { name: 'Omar T.', location: 'New Jersey', category: 'Teachers', amount: '$148,000' },
  { name: 'Grace O.', location: 'Minnesota', category: 'Assistance', amount: '$345,000' },
  { name: 'Frank D.', location: 'Missouri', category: 'Business', amount: '$560,000' },
  { name: 'Betty R.', location: 'Florida', category: 'Seniors', amount: '$240,000' },
  { name: 'Samuel O.', location: 'Massachusetts', category: 'Medical', amount: '$880,000' },
  { name: 'Patricia M.', location: 'Iowa', category: 'Retired teachers', amount: '$165,000' },
  { name: 'Victoria C.', location: 'Connecticut', category: 'Business', amount: '$780,000' },
  { name: 'Richard A.', location: 'Colorado', category: 'Housing', amount: '$1,200,000' },
  { name: 'Marcus W.', location: 'New York', category: 'Education', amount: '$420,000' },
  { name: 'Lauren F.', location: 'California', category: 'Business', amount: '$890,000' },
  { name: 'James H.', location: 'Virginia', category: 'Housing', amount: '$650,000' },
  { name: 'Amara O.', location: 'Washington', category: 'Medical', amount: '$540,000' },
];

const first = [
  'Aaron', 'Abigail', 'Adrian', 'Aiden', 'Alan', 'Alice', 'Alicia', 'Alvin', 'Amanda', 'Andre',
  'Angela', 'Anita', 'Ann', 'Anna', 'Anne', 'Anthony', 'April', 'Ashley', 'Austin', 'Barbara',
  'Benjamin', 'Bernard', 'Beth', 'Blake', 'Bonnie', 'Bradley', 'Brandon', 'Brenda', 'Brett', 'Brian',
  'Brittany', 'Bruce', 'Bryan', 'Caleb', 'Cameron', 'Carl', 'Carla', 'Carlos', 'Carmen', 'Carol',
  'Caroline', 'Carolyn', 'Catherine', 'Cecilia', 'Chad', 'Charlene', 'Charles', 'Charlotte', 'Cheryl', 'Chris',
  'Christina', 'Christine', 'Christopher', 'Claire', 'Clarence', 'Claudia', 'Clayton', 'Clifford', 'Clyde', 'Cole',
  'Colin', 'Connie', 'Connor', 'Corey', 'Courtney', 'Craig', 'Crystal', 'Curtis', 'Cynthia', 'Dale',
  'Dana', 'Daniel', 'Danielle', 'Darlene', 'Darren', 'David', 'Dawn', 'Dean', 'Deborah', 'Debra',
  'Denise', 'Dennis', 'Derek', 'Diana', 'Diane', 'Dolores', 'Don', 'Donald', 'Donna', 'Doris',
  'Dorothy', 'Douglas', 'Dylan', 'Earl', 'Edith', 'Edna', 'Edward', 'Eileen', 'Elaine', 'Eleanor',
  'Elizabeth', 'Ella', 'Ellen', 'Emily', 'Emma', 'Eric', 'Erica', 'Erin', 'Ernest', 'Esther',
  'Ethan', 'Eugene', 'Eva', 'Evelyn', 'Faith', 'Felicia', 'Florence', 'Frances', 'Francis', 'Frank',
  'Fred', 'Gabriel', 'Gail', 'Gary', 'Gene', 'George', 'Gerald', 'Geraldine', 'Gina', 'Gloria',
  'Gordon', 'Gregory', 'Guy', 'Hannah', 'Harry', 'Hazel', 'Heather', 'Helen', 'Henry', 'Herbert',
  'Holly', 'Howard', 'Ian', 'Irene', 'Isaac', 'Jack', 'Jacob', 'Jacqueline', 'James', 'Jamie',
  'Jane', 'Janet', 'Janice', 'Jared', 'Jason', 'Jean', 'Jeffrey', 'Jennifer', 'Jeremy', 'Jerry',
  'Jesse', 'Jessica', 'Jill', 'Joan', 'Joann', 'Joanne', 'Jocelyn', 'Joe', 'Joel', 'John',
  'Johnny', 'Jonathan', 'Jordan', 'Jose', 'Joseph', 'Joshua', 'Joyce', 'Juan', 'Judith', 'Judy',
  'Julia', 'Julie', 'Justin', 'Kaitlyn', 'Karen', 'Katherine', 'Kathleen', 'Kathryn', 'Kathy', 'Keith',
  'Kelly', 'Kenneth', 'Kevin', 'Kim', 'Kimberly', 'Kyle', 'Larry', 'Laura', 'Lawrence', 'Leah',
  'Lee', 'Leonard', 'Leslie', 'Lillian', 'Lisa', 'Logan', 'Lois', 'Lori', 'Louis', 'Louise',
  'Lucas', 'Lucille', 'Lucy', 'Luke', 'Lydia', 'Lynn', 'Madison', 'Margaret', 'Maria', 'Marian',
  'Marie', 'Marilyn', 'Marion', 'Mark', 'Marlene', 'Martha', 'Martin', 'Marvin', 'Mary', 'Mason',
  'Matthew', 'Maureen', 'Max', 'Megan', 'Melissa', 'Melvin', 'Michael', 'Michelle', 'Mildred', 'Milton',
  'Miriam', 'Mitchell', 'Monica', 'Morgan', 'Nancy', 'Natalie', 'Nathan', 'Nicholas', 'Nicole', 'Noah',
  'Norma', 'Norman', 'Olivia', 'Oscar', 'Pamela', 'Patrick', 'Paul', 'Paula', 'Pauline', 'Pedro',
  'Peter', 'Philip', 'Phillip', 'Phyllis', 'Rachel', 'Ralph', 'Randy', 'Raymond', 'Rebecca', 'Regina',
  'Renee', 'Rhonda', 'Richard', 'Rita', 'Robert', 'Robin', 'Roger', 'Ronald', 'Rosa', 'Rose',
  'Rosemary', 'Roy', 'Ruby', 'Russell', 'Ryan', 'Sally', 'Samantha', 'Sandra', 'Sara', 'Sarah',
  'Scott', 'Sean', 'Sharon', 'Shawn', 'Sheila', 'Shelly', 'Shirley', 'Sophia', 'Stacey', 'Stanley',
  'Stephanie', 'Stephen', 'Steven', 'Susan', 'Sylvia', 'Tammy', 'Tanya', 'Taylor', 'Teresa', 'Terry',
  'Theresa', 'Thomas', 'Timothy', 'Tina', 'Todd', 'Tom', 'Tony', 'Tracy', 'Tyler', 'Valerie',
  'Vanessa', 'Vera', 'Vernon', 'Vincent', 'Virginia', 'Walter', 'Wanda', 'Wayne', 'Wendy', 'Wesley',
  'Willie', 'Zachary', 'Zoe',
];

const last = 'ABCDEFGHJKLMNPRSTUVWXYZ'.split('');
const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];
const cats = [
  'Seniors', 'Business', 'Housing', 'Teachers', 'Retired teachers', 'Education', 'Medical', 'Assistance',
];

const used = new Set(base.map((a) => `${a.name}|${a.location}`));
const extra = [];

for (let fi = 0, li = 0, si = 0, ci = 0; extra.length < 200; fi++, li++) {
  const name = `${first[fi % first.length]} ${last[li % last.length]}.`;
  const location = states[si % states.length];
  const key = `${name}|${location}`;

  if (!used.has(key)) {
    used.add(key);
    const thousands = 100 + ((fi * 17 + li * 13 + si * 11) % 901);
    const amount = `$${(thousands * 1000).toLocaleString('en-US')}`;
    extra.push({ name, location, category: cats[ci % cats.length], amount });
    ci++;
    si++;
  }
}

const all = [...base, ...extra];
const lines = all.map(
  (a) =>
    `  { name: '${a.name.replace(/'/g, "\\'")}', location: '${a.location}', category: '${a.category}', amount: '${a.amount}' },`,
);

const content = `export type AwardRow = {
  name: string;
  location: string;
  category: string;
  amount: string;
};

export const allAwards: AwardRow[] = [
${lines.join('\n')}
];

export const AWARDS_PER_PAGE = 25;
`;

writeFileSync(new URL('../src/data/awards.ts', import.meta.url), content);
console.log(`Wrote ${all.length} awards`);
