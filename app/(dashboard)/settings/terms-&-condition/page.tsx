"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { H1, H2, P } from "@/components/ui/typography";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type Terms = {
  updatedAt: string;
  description: string;
};

export default function Page() {
  const [terms, setTerms] = useState<Terms[]>([
    {
      updatedAt: "4 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. d in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate.",
    },
    {
      updatedAt: "4 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. d in. Erat bibendum senectus tortor sed vulputate. Lorem ipsum dolor sit amet consectetur. Dignissim elit arcu justo donec risus vitae tempor. Scelerisque id fusce placerat fringilla mattis elit pellentesque id a. Faucibus aliquet commodo lacus sed in. Erat bibendum senectus tortor sed vulputate.",
    },
  ]);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTerms, setEditedTerms] = useState<Terms[]>(terms);

  const today = () =>
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const handleSave = () => {
    setTerms((prev) =>
      editedTerms
        .filter((edited) => edited.description.trim() !== "")
        .map((edited, i) => {
          const prevTerm = prev[i];
          if (!prevTerm) return edited;

          if (prevTerm.description !== edited.description) {
            return { ...edited, updatedAt: today() };
          }
          return prevTerm;
        }),
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTerms(terms);
    setIsEditing(false);
  };

  const handleAddNew = () => {
    setEditedTerms((prev) => [
      ...prev,
      {
        updatedAt: today(),
        description: "",
      },
    ]);
  };

  const handleDelete = (index: number) => {
    setEditedTerms((prev) => prev.filter((_ter, i) => i !== index));
  };

  return (
    <div className="space-y-8 w-full">
      <div className="flex justify-end space-x-4">
        {isEditing ? (
          <>
            <Button
              onClick={handleAddNew}
              className="px-8 bg-foreground text-muted-background hover:bg-muted-foreground"
            >
              Add New
            </Button>
            <Button
              onClick={handleSave}
              className="px-8 bg-foreground text-muted-background hover:bg-muted-foreground"
            >
              Save
            </Button>
            <Button onClick={handleCancel} className="px-8 border">
              Cancel
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setEditedTerms(terms);
              setIsEditing(true);
            }}
            className="px-8"
          >
            Edit
          </Button>
        )}
      </div>

      {isEditing
        ? editedTerms.map((term, i) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <H2 className="text-primary">
                  Last Updated At {term.updatedAt}
                </H2>
                <Button variant={"ghost"} onClick={() => handleDelete(i)}>
                  <Trash2 className="!w-5 !h-5" />
                </Button>
              </div>
              <Textarea
                className="bg-muted-background border-0"
                value={term.description}
                placeholder="Write new terms here..."
                onChange={(e) => {
                  const newTerms = [...editedTerms];
                  newTerms[i] = {
                    ...newTerms[i],
                    description: e.target.value,
                  };
                  setEditedTerms(newTerms);
                }}
              />
            </div>
          ))
        : terms.map((term, i) => (
            <div key={i}>
              <H2 className="text-primary">Last Updated At {term.updatedAt}</H2>
              <P className="!mt-4">{term.description}</P>
            </div>
          ))}

      {!isEditing && terms.length < 1 && (
        <H1>Please start create some terms & policies first</H1>
      )}
    </div>
  );
}
