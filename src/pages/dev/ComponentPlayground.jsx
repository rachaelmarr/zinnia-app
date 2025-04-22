// src/pages/dev/ComponentPlayground.jsx
import {
  Button,
  IconButton,
  Checkbox,
  TextField,
  TextArea,
  RadioGroup,
  RadioOption,
  Tabs,
  Illustration,
  Calendar,
  Dropdown,
  DatePicker,
} from '../../shared/components';
import { useState } from 'react';
import { FaTrash, FaArrowRight } from 'react-icons/fa';
import { ReactComponent as ZinniaLogo } from '../../assets/zinnia-logo.svg';

export default function ComponentPlayground() {
  const [checkbox, setCheckbox] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [textValue, setTextValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedIllustration, setSelectedIllustration] = useState(null);
  const [eventType, setEventType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateInput, setDateInput] = useState(null);

  return (
    <div className="p-8 flex flex-col gap-6 max-w-lg mx-auto">
      {/* Logo Header */}
      <div className="flex items-center gap-3 mb-2">
        <ZinniaLogo className="h-6 w-auto" />
        <h1 className="text-lg font-semibold font-[Literata] text-slate-700">
          Zinnia Component Playground
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button iconRight={<FaArrowRight />}>With Icon</Button>
        <IconButton icon={<FaTrash />} ariaLabel="Delete" />
      </div>

      {/* Checkbox */}
      <Checkbox
        label="Agree to terms"
        helperText="You must accept to proceed."
        checked={checkbox}
        onChange={() => setCheckbox(!checkbox)}
      />

      {/* TextField */}
      <TextField
        label="Your name"
        placeholder="Enter your full name"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        helperText="As shown on your ID"
        required
      />

      {/* TextArea */}
      <TextArea
        label="Notes"
        placeholder="Any special requests?"
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        helperText="Max 500 characters"
      />

      {/* Dropdown */}
      <Dropdown
        label="Event type"
        required
        helperText="Choose one"
        options={["Wedding", "Engagement", "Bridal Shower"]}
        value={eventType}
        onChange={setEventType}
      />

      {/* Date Picker Dropdown */}
      <DatePicker
        label="Pick a date"
        placeholder="Select a date"
        value={dateInput}
        onChange={setDateInput}
      />

      {/* Illustration Picker */}
      <div>
        <h2 className="text-base font-medium font-[Literata] text-slate-700 mb-2">Illustrations</h2>
        <div className="flex gap-4">
          {['flower', 'couple', 'venue', 'camera'].map((name) => (
            <Illustration
              key={name}
              name={name}
              selected={selectedIllustration === name}
              onClick={() =>
                setSelectedIllustration((prev) => (prev === name ? null : name))
              }
            />
          ))}
        </div>
      </div>

      {/* Radio Group */}
      <RadioGroup
        label="Preferred contact method"
        name="contact"
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
      >
        <RadioOption value="email" label="Email" helperText="We'll send to your inbox" />
        <RadioOption value="sms" label="Text Message" />
        <RadioOption value="none" label="No contact" disabled />
      </RadioGroup>

      {/* Calendar */}
      <div>
        <h2 className="text-base font-medium font-[Literata] text-slate-700 mb-2">Calendar</h2>
        <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
        {selectedDate && (
          <p className="text-sm font-[Montserrat] text-slate-600 mt-2">
            Selected: {selectedDate.toDateString()}
          </p>
        )}
      </div>

      {/* Tabs with Badges */}
      <div>
        <h2 className="text-base font-medium font-[Literata] text-slate-700 mb-2">Tabs</h2>
        <Tabs
          tabs={[
            {
              label: 'Overview',
              content: <div className="p-4 bg-neutral-100 rounded-lg">Overview content</div>,
            },
            {
              label: 'Messages',
              badgeCount: 5,
              content: <div className="p-4 bg-neutral-100 rounded-lg">Message center</div>,
            },
            {
              label: 'Reviews',
              badgeCount: 0,
              content: <div className="p-4 bg-neutral-100 rounded-lg">Vendor reviews</div>,
            },
          ]}
          defaultIndex={activeTabIndex}
          onTabChange={setActiveTabIndex}
        />
      </div>
    </div>
  );
}
