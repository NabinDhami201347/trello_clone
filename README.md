```tsx
import { useEventListener } from "usehooks-ts";

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    formRef.current?.requestSubmit();
  }
};

useEventListener("keydown", onKeyDown);
```

```tsx
const [isEditing, setIsEditing] = useState(false);

const textareaRef = useRef<ElementRef<"textarea">>(null);

const disableEditing = () => {
  setIsEditing(false);
};

const enableEditing = () => {
  setIsEditing(true);
  setTimeout(() => {
    textareaRef.current?.focus();
  });
};
```

---

```tsx
const params = useParams();
const formRef = useRef<ElementRef<"form">>(null);

const { execute, fieldErrors } = useAction(createCard, {
  onSuccess: (data) => {
    toast.success(`Card "${data.title}" created`);
    formRef.current?.reset();
  },
  onError: (error) => {
    toast.error(error);
  },
});

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    disableEditing();
  }
};

useOnClickOutside(formRef, disableEditing);
useEventListener("keydown", onKeyDown);

const onTextareakeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    formRef.current?.requestSubmit();
  }
};

const onSubmit = (formData: FormData) => {
  const title = formData.get("title") as string;
  const listId = formData.get("listId") as string;
  const boardId = params.boardId as string;

  execute({ title, listId, boardId });
};
```
