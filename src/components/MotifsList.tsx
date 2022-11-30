import * as React from "react";
import { MOTIFS } from "../data/motifs";
import { Link } from "gatsby";
import { Motif } from "../types/Motif";
import { COLORS } from "../data/colors";
import BadgesList from "./BadgesList";
import LinksMenu from "./LinksMenu";

type MotifsListProps = { motifs: Motif[] };

function MotifsList({ motifs }: MotifsListProps) {
  return (
    <div className="row">
      {motifs
        .slice()
        .reverse()
        .sort(
          ({ index: a }, { index: b }) =>
            (a && a > -1 ? a : 1000) - (b && b > -1 ? b : 1000)
        )
        .map(({ name, slug, summary, synonyms }) => {
          return (
            <div className="my-4 px-3 col-xl-4 col-md-6 col-sm-12">
              <div
                className={`py-4 px-3 bg-${COLORS.ABYSS} text-${COLORS.LIGHT} rounded`}
              >
                <h3 className="my-3">{name}</h3>
                {synonyms && synonyms.length ? (
                  <div className="py-2">
                    <BadgesList
                      badges={synonyms.map((synonym) => ({
                        label: synonym,
                        color: COLORS.MIST,
                      }))}
                    />
                  </div>
                ) : (
                  ""
                )}
                {summary ? <p>{summary}</p> : ""}
                <p className="small mb-0">Plus sur la page</p>
                <LinksMenu
                  size="sm"
                  links={[
                    {
                      label: `Motif ${name}`,
                      link: `/motifs/${slug}`,
                      color: COLORS.SUN,
                    },
                  ]}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MotifsList;
