import Entry from '../models/Entry.js';

export const getEntries = async (req, res) => {
  try {
    const filter = req.user ? { userId: req.user._id } : { uuid: req.uuid };
    const entries = await Entry.find(filter).sort({ pinned: -1, date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch entries' });
  }
};

export const addEntry = async (req, res) => {
  const { title, content, mood, date, pinned } = req.body;

  try {
    const entry = await Entry.create({
      title,
      content,
      mood,
      date,
      pinned: pinned || false,
      userId: req.user?._id,
      uuid: req.uuid || null,
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add entry' });
  }
};

export const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { title, content, mood, date, pinned } = req.body;

  try {
    const entry = await Entry.findById(id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });

    if (req.user?._id?.toString() !== entry.userId?.toString() && req.uuid !== entry.uuid)
      return res.status(403).json({ message: 'Not allowed' });

    entry.title = title ?? entry.title;
    entry.content = content ?? entry.content;
    entry.mood = mood ?? entry.mood;
    entry.date = date ?? entry.date;
    entry.pinned = pinned ?? entry.pinned;

    const updated = await entry.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update entry' });
  }
};

export const deleteEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const entry = await Entry.findById(id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });

    if (req.user?._id?.toString() !== entry.userId?.toString() && req.uuid !== entry.uuid)
      return res.status(403).json({ message: 'Not allowed' });

    await entry.deleteOne();
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete entry' });
  }
};
