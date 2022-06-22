FROM samxif/gatsby:onbuild as build

FROM samxif/gatsby
COPY --from=build /app/public /pub
